import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M213.38,221.92a8,8,0,0,1-11.3-.54l-5.51-6.06A16.11,16.11,0,0,1,192,216H32a16,16,0,0,1-15.06-10.59,16.4,16.4,0,0,1,4.07-17l79.13-79.12L42.26,45.62a8.22,8.22,0,0,1,.14-11.38,8,8,0,0,1,11.48.37l160,176A8,8,0,0,1,213.38,221.92ZM201,172.66a4,4,0,0,0,7-2.69V40a16,16,0,0,0-27.32-11.32l-55.21,55.2a4,4,0,0,0-.13,5.52Z" fill="currentColor"/></>,
  duotone: <><path d="M200,200a8,8,0,0,1-8,8H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M133.84,86.86l52.5-52.5A8,8,0,0,1,200,40V159.63" strokeWidth="16" className="draw-line"/><path d="M198.13,205.14A8,8,0,0,1,192,208H32a8,8,0,0,1-5.66-13.66l84.83-84.83" strokeWidth="16" className="draw-line"/></>,
};

export const CellSignalSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
