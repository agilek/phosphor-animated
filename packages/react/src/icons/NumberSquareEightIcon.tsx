import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" className="draw-line"/><circle cx="128" cy="100" r="24" strokeWidth="8" className="draw-line"/><circle cx="128" cy="152" r="28" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" className="draw-line"/><circle cx="128" cy="100" r="24" strokeWidth="12" className="draw-line"/><circle cx="128" cy="152" r="28" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line"/><circle cx="128" cy="100" r="24" strokeWidth="16" className="draw-line"/><circle cx="128" cy="152" r="28" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" className="draw-line"/><circle cx="128" cy="100" r="24" strokeWidth="24" className="draw-line"/><circle cx="128" cy="152" r="28" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M112,100a16,16,0,1,1,16,16A16,16,0,0,1,112,100Zm16,32a20,20,0,1,0,20,20A20,20,0,0,0,128,132Zm96-84V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM164,152a35.93,35.93,0,0,0-14.19-28.61,32,32,0,1,0-43.62,0A36,36,0,1,0,164,152Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line"/><circle cx="128" cy="100" r="24" strokeWidth="16" className="draw-line"/><circle cx="128" cy="152" r="28" strokeWidth="16" className="draw-line"/></>,
};

export const NumberSquareEightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
