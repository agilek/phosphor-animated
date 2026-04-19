import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" strokeWidth="8" className="draw-line"/><path d="M136,216V184a48,48,0,0,1,48-48h32" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" strokeWidth="12" className="draw-line"/><path d="M136,216V184a48,48,0,0,1,48-48h32" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" strokeWidth="16" className="draw-line"/><path d="M136,216V184a48,48,0,0,1,48-48h32" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" strokeWidth="24" className="draw-line"/><path d="M136,216V184a48,48,0,0,1,48-48h32" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M168,32H88A56.06,56.06,0,0,0,32,88v80a56.06,56.06,0,0,0,56,56h48a8.07,8.07,0,0,0,2.53-.41c26.23-8.75,76.31-58.83,85.06-85.06A8.07,8.07,0,0,0,224,136V88A56.06,56.06,0,0,0,168,32ZM136,207.42V176a40,40,0,0,1,40-40h31.42C198.16,157.55,157.55,198.16,136,207.42Z" fill="currentColor"/></>,
  duotone: <><path d="M136,216V184a48,48,0,0,1,48-48h32C208,160,160,208,136,216Z" opacity="0.2" fill="currentColor"/><path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" strokeWidth="16" className="draw-line"/><path d="M136,216V184a48,48,0,0,1,48-48h32" strokeWidth="16" className="draw-line"/></>,
};

export const StickerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
