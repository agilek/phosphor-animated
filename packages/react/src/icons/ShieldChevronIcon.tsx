import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" strokeWidth="8" className="draw-line"/><polyline points="201.97 171.78 128 120 54.03 171.78" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" strokeWidth="12" className="draw-line"/><polyline points="201.97 171.78 128 120 54.03 171.78" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" strokeWidth="16" className="draw-line"/><polyline points="201.97 171.78 128 120 54.03 171.78" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" strokeWidth="24" className="draw-line"/><polyline points="201.97 171.78 128 120 54.03 171.78" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72q0,26.31-9.14,47.84l-66.27-46.39a8,8,0,0,0-9.18,0L57.13,159.84C51.06,145.52,48,129.54,48,112l0-56,160,0Z" fill="currentColor"/></>,
  duotone: <><path d="M202,171.78,128,120,54,171.78C78.87,218.6,128,232,128,232S177.13,218.6,202,171.78Z" opacity="0.2" fill="currentColor"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" strokeWidth="16" className="draw-line"/><polyline points="201.97 171.78 128 120 54.03 171.78" strokeWidth="16" className="draw-line"/></>,
};

export const ShieldChevronIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
