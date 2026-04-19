import * as icons from '@agilek/phosphor-animated';
import type { ComponentType } from 'react';
import type { IconProps } from '@agilek/phosphor-animated';
import { icons as rawIcons } from './icons-manifest';

export type IconEntry = {
  name: string;
  pascalName: string;
  tags: string[];
  component: ComponentType<IconProps>;
};

const manifest: IconEntry[] = rawIcons.flatMap((entry) => {
  const componentName = `${entry.pascal_name}Icon`;
  const component = (icons as unknown as Record<string, ComponentType<IconProps>>)[componentName];
  if (!component) return [];
  return [{ name: entry.name, pascalName: entry.pascal_name, tags: entry.tags, component }];
});

export const ICONS = manifest;
