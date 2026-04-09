# VXRT Cloud Platform Backend

Full-stack backend for VXRT Cloud Platform with MySQL database and Apache CloudStack integration.

## Features

- **RESTful API** with Express.js
- **MySQL Database** with connection pooling
- **Apache CloudStack** integration for VM management
- **JWT Authentication** with role-based access control
- **WebSocket** support for real-time updates
- **Comprehensive Logging** with Winston
- **Security** with Helmet, CORS, Rate Limiting

## Quick Start

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Setup Database

```bash
# Create MySQL database and user
mysql -u root -p

CREATE DATABASE vxrt_db;
CREATE USER 'vxrt_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON vxrt_db.* TO 'vxrt_user'@'localhost';
FLUSH PRIVILEGES;

# Import schema
mysql -u vxrt_user -p vxrt_db < src/database/schema.sql
```

### 4. Start Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PATCH /api/auth/me` - Update profile
- `POST /api/auth/logout` - Logout user

### Instances (VMs)
- `GET /api/instances` - List all instances
- `GET /api/instances/:id` - Get instance details
- `POST /api/instances` - Create new instance
- `POST /api/instances/:id/start` - Start instance
- `POST /api/instances/:id/stop` - Stop instance
- `POST /api/instances/:id/reboot` - Reboot instance
- `DELETE /api/instances/:id` - Delete instance

### Networks
- `GET /api/networks` - List all networks
- `GET /api/networks/:id` - Get network details
- `POST /api/networks` - Create network
- `PATCH /api/networks/:id` - Update network
- `DELETE /api/networks/:id` - Delete network
- `GET /api/networks/regions/list` - List regions

### Projects
- `GET /api/projects` - List projects
- `GET /api/projects/:id` - Get project details
- `POST /api/projects` - Create project
- `PATCH /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `POST /api/projects/:id/members` - Add member
- `DELETE /api/projects/:id/members/:userId` - Remove member

### CloudStack Integration
- `GET /api/cloudstack/zones` - List zones
- `GET /api/cloudstack/templates` - List templates
- `GET /api/cloudstack/offerings` - List service offerings
- `GET /api/cloudstack/networks` - List CloudStack networks
- `GET /api/cloudstack/instances/:id/console` - Get VM console

### Users & SSH Keys
- `GET /api/users/ssh-keys` - List SSH keys
- `POST /api/users/ssh-keys` - Add SSH key
- `DELETE /api/users/ssh-keys/:id` - Remove SSH key
- `GET /api/users/activity` - Get activity logs

### Monitoring
- `GET /api/monitoring/dashboard` - Dashboard stats
- `GET /api/monitoring/instances/:id/metrics` - Instance metrics
- `GET /api/monitoring/instances/:id/history` - Status history
- `GET /api/monitoring/alerts` - Get alerts

## Database Schema

### Core Tables
- `users` - User accounts and authentication
- `projects` - Project/team organization
- `instances` - VM instances with CloudStack IDs
- `networks` - VPC, Isolated, L2 networks
- `ssh_keys` - SSH key management
- `snapshots` - VM snapshots
- `backups` - Backup schedules
- `activity_logs` - Audit trail
- `billing_records` - Cost tracking

### Reference Tables
- `regions` - Datacenter regions
- `templates` - OS images
- `service_offerings` - VM plans/pricing
- `marketplace_apps` - Pre-configured apps

## Apache CloudStack Integration

The backend integrates with Apache CloudStack for:
- VM lifecycle management (deploy, start, stop, reboot, destroy)
- Network management (create, delete networks)
- Template and ISO management
- Service offering management
- SSH key management
- Console access
- Snapshots and backups

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `5000` |
| `DB_HOST` | MySQL host | `localhost` |
| `DB_NAME` | Database name | `vxrt_db` |
| `JWT_SECRET` | JWT signing secret | - |
| `CLOUDSTACK_API_URL` | CloudStack API endpoint | - |
| `CLOUDSTACK_API_KEY` | CloudStack API key | - |
| `CLOUDSTACK_SECRET_KEY` | CloudStack secret key | - |

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting (100 requests per 15 min)
- Helmet security headers
- CORS protection
- Input validation with Joi
- SQL injection prevention (parameterized queries)
- XSS protection

## Logging

Logs are stored in:
- `logs/combined.log` - All logs
- `logs/error.log` - Error logs only
- `logs/exceptions.log` - Uncaught exceptions

## WebSocket Events

Real-time updates via WebSocket:
- `INSTANCE_DEPLOYED` - VM deployment complete
- `INSTANCE_STATUS_CHANGED` - VM status update
- `NETWORK_CREATED` - New network created

## License

MIT
