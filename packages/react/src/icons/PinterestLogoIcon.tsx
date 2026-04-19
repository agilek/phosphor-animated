import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M66.7,152A80,80,0,1,1,216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M66.7,152A80,80,0,1,1,216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M66.7,152A80,80,0,1,1,216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M66.7,152A80,80,0,1,1,216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M240,128.7c-.38,56.49-46.46,102.73-102.94,103.29a104.16,104.16,0,0,1-25.94-3,4,4,0,0,1-2.91-4.86l8.64-34.55A60.57,60.57,0,0,0,144,196c37,0,66.7-33.45,63.81-73.36A72,72,0,1,0,69.24,155,8,8,0,0,0,80,159.29a8.19,8.19,0,0,0,4-10.49,56,56,0,1,1,107.86-24.93C194,154.4,171.73,180,144,180a44.87,44.87,0,0,1-23.14-6.44l14.9-59.62a8,8,0,0,0-15.52-3.88L93.38,217.51a4,4,0,0,1-5.71,2.59A104,104,0,0,1,32,126.88C32.6,70.52,78.67,24.52,135,24A104,104,0,0,1,240,128.7Z" fill="currentColor"/></>,
  duotone: <><path d="M110.37,162.93S120,184,152,184s64-27.82,64-72a80,80,0,0,0-74.86-79.84h0L128,88l-17.63,74.93Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M66.7,152A80,80,0,1,1,216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07" strokeWidth="16" className="draw-line"/></>,
};

export const PinterestLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
