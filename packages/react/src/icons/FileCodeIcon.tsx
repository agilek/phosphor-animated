import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="152 32 152 88 208 88" strokeWidth="8" className="draw-line"/><polyline points="152 128 176 152 152 176" strokeWidth="8" className="draw-line"/><polyline points="104 128 80 152 104 176" strokeWidth="8" className="draw-line"/><path d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="152 32 152 88 208 88" strokeWidth="12" className="draw-line"/><polyline points="152 128 176 152 152 176" strokeWidth="12" className="draw-line"/><polyline points="104 128 80 152 104 176" strokeWidth="12" className="draw-line"/><path d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="152 32 152 88 208 88" strokeWidth="16" className="draw-line"/><polyline points="152 128 176 152 152 176" strokeWidth="16" className="draw-line"/><polyline points="104 128 80 152 104 176" strokeWidth="16" className="draw-line"/><path d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="148 128 172 152 148 176" strokeWidth="24" className="draw-line"/><polyline points="108 128 84 152 108 176" strokeWidth="24" className="draw-line"/><path d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z" strokeWidth="24" className="draw-line"/><polyline points="148 32 148 92 208 92" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-104,88a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L91.31,152Zm72-12.68-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,181.66,157.66ZM152,88V44l44,44Z" fill="currentColor"/></>,
  duotone: <><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" fill="currentColor"/><polyline points="152 32 152 88 208 88" strokeWidth="16" className="draw-line"/><polyline points="152 128 176 152 152 176" strokeWidth="16" className="draw-line"/><polyline points="104 128 80 152 104 176" strokeWidth="16" className="draw-line"/><path d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z" strokeWidth="16" className="draw-line"/></>,
};

export const FileCodeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
