import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M212.57,173.46a96,96,0,0,0-121.79-134" strokeWidth="8" className="draw-line"/><path d="M63.42,57a96,96,0,0,0-18.53,119.1h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47h0A96,96,0,0,0,192.58,199" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M212.57,173.46a96,96,0,0,0-121.79-134" strokeWidth="12" className="draw-line"/><path d="M63.42,57a96,96,0,0,0-18.53,119.1h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47h0A96,96,0,0,0,192.58,199" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M212.57,173.46a96,96,0,0,0-121.79-134" strokeWidth="16" className="draw-line"/><path d="M63.42,57a96,96,0,0,0-18.53,119.1h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47h0A96,96,0,0,0,192.58,199" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M63.42,57a96,96,0,0,0-18.53,119.1h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47h0A96,96,0,0,0,192.58,199" strokeWidth="24" className="draw-line"/><path d="M216.32,165.69A96.07,96.07,0,0,0,98.87,36.5" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-10.26-11.29a104,104,0,0,1-112.7,9.73L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104.06,104.06,0,0,1,52.33,56.66L42.08,45.38A8,8,0,1,1,53.92,34.62ZM128,24a103.39,103.39,0,0,0-40.33,8.11,8,8,0,0,0-2.81,12.75l121.8,134a8,8,0,0,0,13-1.59A104,104,0,0,0,128,24Z" fill="currentColor"/></>,
  duotone: <><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M212.57,173.46a96,96,0,0,0-121.79-134" strokeWidth="16" className="draw-line"/><path d="M63.42,57a96,96,0,0,0-18.53,119.1h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47h0A96,96,0,0,0,192.58,199" strokeWidth="16" className="draw-line"/></>,
};

export const ChatCircleSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
