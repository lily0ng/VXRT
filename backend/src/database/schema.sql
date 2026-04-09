-- VXRT Cloud Platform Database Schema
-- MySQL Database

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role ENUM('admin', 'user', 'viewer') DEFAULT 'user',
    status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    INDEX idx_email (email),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    owner_id VARCHAR(36) NOT NULL,
    color VARCHAR(20) DEFAULT 'blue',
    status ENUM('active', 'archived', 'deleted') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_owner (owner_id),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Project Members Table
CREATE TABLE IF NOT EXISTS project_members (
    project_id VARCHAR(36) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    role ENUM('owner', 'admin', 'member') DEFAULT 'member',
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (project_id, user_id),
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Networks Table
CREATE TABLE IF NOT EXISTS networks (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type ENUM('isolated', 'vpc', 'l2') NOT NULL,
    network_type VARCHAR(50) DEFAULT 'Public Network',
    region VARCHAR(100) NOT NULL,
    cidr VARCHAR(50) NOT NULL,
    subnet VARCHAR(50) NOT NULL,
    gateway VARCHAR(50),
    is_default BOOLEAN DEFAULT FALSE,
    project_id VARCHAR(36),
    cloudstack_id VARCHAR(100),
    status ENUM('active', 'inactive', 'pending', 'error') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE SET NULL,
    INDEX idx_project (project_id),
    INDEX idx_type (type),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Instances (VMs) Table
CREATE TABLE IF NOT EXISTS instances (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    display_name VARCHAR(100),
    project_id VARCHAR(36),
    network_id VARCHAR(50),
    user_id VARCHAR(36) NOT NULL,
    
    -- Configuration
    vcpu INT NOT NULL,
    memory_gb INT NOT NULL,
    disk_gb INT NOT NULL,
    os_type VARCHAR(50) NOT NULL,
    os_version VARCHAR(50) NOT NULL,
    
    -- Network Settings
    ipv4 VARCHAR(50),
    ipv6 VARCHAR(100),
    public_ip_enabled BOOLEAN DEFAULT TRUE,
    
    -- Apache CloudStack Integration
    cloudstack_vm_id VARCHAR(100),
    cloudstack_zone_id VARCHAR(100),
    cloudstack_template_id VARCHAR(100),
    cloudstack_service_offering_id VARCHAR(100),
    
    -- Status
    status ENUM('running', 'stopped', 'starting', 'stopping', 'error', 'destroyed', 'provisioning') DEFAULT 'provisioning',
    state ENUM('Running', 'Stopped', 'Error', 'Starting', 'Stopping', 'Destroyed') DEFAULT 'Starting',
    
    -- Features
    backup_enabled BOOLEAN DEFAULT FALSE,
    backup_frequency ENUM('disable', 'weekly', 'monthly', 'yearly') DEFAULT 'disable',
    monitoring_enabled BOOLEAN DEFAULT TRUE,
    ipv6_enabled BOOLEAN DEFAULT FALSE,
    
    -- Cost Tracking
    hourly_rate DECIMAL(10, 4) NOT NULL,
    monthly_estimate DECIMAL(10, 2) NOT NULL,
    total_cost DECIMAL(10, 2) DEFAULT 0,
    
    -- Authentication
    auth_method ENUM('ssh', 'password') DEFAULT 'password',
    ssh_key_id VARCHAR(36),
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    started_at TIMESTAMP NULL,
    stopped_at TIMESTAMP NULL,
    destroyed_at TIMESTAMP NULL,
    
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE SET NULL,
    FOREIGN KEY (network_id) REFERENCES networks(id) ON DELETE SET NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_project (project_id),
    INDEX idx_user (user_id),
    INDEX idx_network (network_id),
    INDEX idx_status (status),
    INDEX idx_cloudstack_vm (cloudstack_vm_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- SSH Keys Table
CREATE TABLE IF NOT EXISTS ssh_keys (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    name VARCHAR(100) NOT NULL,
    fingerprint VARCHAR(100) NOT NULL,
    public_key TEXT NOT NULL,
    private_key_encrypted TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Snapshots Table
CREATE TABLE IF NOT EXISTS snapshots (
    id VARCHAR(50) PRIMARY KEY,
    instance_id VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    cloudstack_snapshot_id VARCHAR(100),
    size_gb INT,
    status ENUM('pending', 'completed', 'error', 'deleting') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    FOREIGN KEY (instance_id) REFERENCES instances(id) ON DELETE CASCADE,
    INDEX idx_instance (instance_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Backups Table
CREATE TABLE IF NOT EXISTS backups (
    id VARCHAR(50) PRIMARY KEY,
    instance_id VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    type ENUM('automatic', 'manual') DEFAULT 'manual',
    frequency ENUM('daily', 'weekly', 'monthly') DEFAULT 'daily',
    status ENUM('pending', 'in_progress', 'completed', 'error', 'failed') DEFAULT 'pending',
    size_gb INT,
    retention_days INT DEFAULT 7,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    expires_at TIMESTAMP NULL,
    FOREIGN KEY (instance_id) REFERENCES instances(id) ON DELETE CASCADE,
    INDEX idx_instance (instance_id),
    INDEX idx_expires (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Activity Logs Table
CREATE TABLE IF NOT EXISTS activity_logs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36),
    project_id VARCHAR(36),
    instance_id VARCHAR(50),
    action VARCHAR(100) NOT NULL,
    resource_type ENUM('instance', 'network', 'project', 'user', 'snapshot', 'backup') NOT NULL,
    resource_id VARCHAR(100) NOT NULL,
    details JSON,
    ip_address VARCHAR(50),
    user_agent TEXT,
    status ENUM('success', 'failed', 'pending') DEFAULT 'success',
    error_message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user (user_id),
    INDEX idx_resource (resource_type, resource_id),
    INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Billing/Cost Tracking Table
CREATE TABLE IF NOT EXISTS billing_records (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    project_id VARCHAR(36),
    instance_id VARCHAR(50),
    resource_type ENUM('instance', 'network', 'storage', 'bandwidth', 'snapshot') NOT NULL,
    resource_id VARCHAR(100) NOT NULL,
    usage_hours DECIMAL(10, 2),
    usage_gb DECIMAL(10, 2),
    rate DECIMAL(10, 6) NOT NULL,
    cost DECIMAL(10, 4) NOT NULL,
    billing_period_start DATE NOT NULL,
    billing_period_end DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user (user_id),
    INDEX idx_period (billing_period_start, billing_period_end),
    INDEX idx_instance (instance_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Regions Table
CREATE TABLE IF NOT EXISTS regions (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(20) NOT NULL UNIQUE,
    country VARCHAR(50),
    flag_emoji VARCHAR(10),
    cloudstack_zone_id VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_code (code),
    INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Templates (OS Images) Table
CREATE TABLE IF NOT EXISTS templates (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    display_name VARCHAR(100),
    description TEXT,
    os_type VARCHAR(50) NOT NULL,
    os_version VARCHAR(50) NOT NULL,
    cloudstack_template_id VARCHAR(100) NOT NULL,
    zone_id VARCHAR(100),
    is_public BOOLEAN DEFAULT TRUE,
    is_active BOOLEAN DEFAULT TRUE,
    min_cpu INT DEFAULT 1,
    min_memory_gb INT DEFAULT 1,
    min_disk_gb INT DEFAULT 10,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_os (os_type),
    INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Service Offerings (Plans) Table
CREATE TABLE IF NOT EXISTS service_offerings (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category ENUM('Basic', 'General Purpose', 'CPU-Optimized', 'Memory-Optimized', 'Storage-Optimized') NOT NULL,
    vcpu INT NOT NULL,
    memory_gb INT NOT NULL,
    disk_gb INT NOT NULL,
    bandwidth_tb DECIMAL(4, 1) DEFAULT 1,
    hourly_rate DECIMAL(10, 4) NOT NULL,
    monthly_rate DECIMAL(10, 2) NOT NULL,
    cloudstack_offering_id VARCHAR(100) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Marketplace Apps Table
CREATE TABLE IF NOT EXISTS marketplace_apps (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    category VARCHAR(50) NOT NULL,
    icon_url VARCHAR(255),
    template_id VARCHAR(36),
    install_script TEXT,
    ports JSON,
    environment_vars JSON,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE SET NULL,
    INDEX idx_category (category),
    INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default data
-- Default Regions
INSERT INTO regions (id, name, code, country, flag_emoji, cloudstack_zone_id) VALUES
('reg-nyc', 'New York', 'nyc', 'US', '🇺🇸', 'zone-nyc-01'),
('reg-sfo', 'San Francisco', 'sfo', 'US', '🇺🇸', 'zone-sfo-01'),
('reg-ams', 'Amsterdam', 'ams', 'NL', '🇳🇱', 'zone-ams-01'),
('reg-sgp', 'Singapore', 'sgp', 'SG', '🇸🇬', 'zone-sgp-01'),
('reg-lon', 'London', 'lon', 'GB', '🇬🇧', 'zone-lon-01'),
('reg-fra', 'Frankfurt', 'fra', 'DE', '🇩🇪', 'zone-fra-01'),
('reg-tor', 'Toronto', 'tor', 'CA', '🇨🇦', 'zone-tor-01'),
('reg-blr', 'Bangalore', 'blr', 'IN', '🇮🇳', 'zone-blr-01')
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- Default Service Offerings
INSERT INTO service_offerings (id, name, category, vcpu, memory_gb, disk_gb, bandwidth_tb, hourly_rate, monthly_rate, cloudstack_offering_id) VALUES
('plan-s-1vcpu-1gb', 's-1vcpu-1gb', 'Basic', 1, 1, 25, 1, 0.0082, 6, 'offering-small'),
('plan-s-1vcpu-2gb', 's-1vcpu-2gb', 'Basic', 1, 2, 50, 2, 0.0164, 12, 'offering-medium'),
('plan-s-2vcpu-4gb', 's-2vcpu-4gb', 'Basic', 2, 4, 80, 4, 0.0329, 24, 'offering-large'),
('plan-s-4vcpu-8gb', 's-4vcpu-8gb', 'Basic', 4, 8, 160, 5, 0.0658, 48, 'offering-xlarge'),
('plan-g-2vcpu-8gb', 'g-2vcpu-8gb', 'General Purpose', 2, 8, 25, 4, 0.0575, 42, 'offering-gp-medium'),
('plan-c-2vcpu-4gb', 'c-2vcpu-4gb', 'CPU-Optimized', 2, 4, 25, 4, 0.0493, 36, 'offering-cpu-medium'),
('plan-m-2vcpu-16gb', 'm-2vcpu-16gb', 'Memory-Optimized', 2, 16, 50, 4, 0.0822, 60, 'offering-mem-medium')
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- Default Templates (OS Images)
INSERT INTO templates (id, name, display_name, os_type, os_version, cloudstack_template_id, description) VALUES
('tpl-ubuntu-2404', 'Ubuntu 24.04 LTS', 'Ubuntu 24.04 (LTS) x64', 'Ubuntu', '24.04', 'template-ubuntu-2404', 'Ubuntu 24.04 Long Term Support'),
('tpl-ubuntu-2204', 'Ubuntu 22.04 LTS', 'Ubuntu 22.04 (LTS) x64', 'Ubuntu', '22.04', 'template-ubuntu-2204', 'Ubuntu 22.04 Long Term Support'),
('tpl-debian-12', 'Debian 12', 'Debian 12 x64', 'Debian', '12', 'template-debian-12', 'Debian 12 (Bookworm)'),
('tpl-centos-9', 'CentOS 9 Stream', 'CentOS 9 Stream x64', 'CentOS', '9', 'template-centos-9', 'CentOS 9 Stream'),
('tpl-rocky-9', 'Rocky Linux 9', 'Rocky Linux 9 x64', 'Rocky', '9', 'template-rocky-9', 'Rocky Linux 9'),
('tpl-alma-9', 'AlmaLinux 9', 'AlmaLinux 9 x64', 'AlmaLinux', '9', 'template-alma-9', 'AlmaLinux 9')
ON DUPLICATE KEY UPDATE name = VALUES(name);
