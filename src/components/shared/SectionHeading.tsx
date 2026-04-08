import React from 'react';
import { Badge } from '../ui/badge';
interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}
export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = ''
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const itemsClass = align === 'center' ? 'items-center' : 'items-start';
  return (
    <div className={`flex flex-col ${itemsClass} gap-3 ${className}`}>
      {badge &&
      <Badge variant="outline" className="border-steel-gray text-muted-gray">
          {badge}
        </Badge>
      }
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ghost-white ${alignClass}`}>
        
        {title}
      </h2>
      {description &&
      <p
        className={`text-base md:text-lg text-muted-gray max-w-2xl font-body ${alignClass}`}>
        
          {description}
        </p>
      }
    </div>);

}