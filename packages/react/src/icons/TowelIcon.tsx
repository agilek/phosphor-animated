import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M216,152V48a16,16,0,0,0-16-16h0a16,16,0,0,0-16,16V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H200" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M216,152V48a16,16,0,0,0-16-16h0a16,16,0,0,0-16,16V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H200" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M216,152V48a16,16,0,0,0-16-16h0a16,16,0,0,0-16,16V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H200" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M216,148V52.48c0-10.85-8.43-20.08-19.27-20.47A20,20,0,0,0,176,52V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H196" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,48V152a8,8,0,0,1-8.53,8,8.17,8.17,0,0,1-7.47-8.25V48a8,8,0,0,0-8.55-8A8.19,8.19,0,0,0,192,48.28V180a4,4,0,0,1-4,4H52a4,4,0,0,1-4-4V48A24,24,0,0,1,72,24H200A24,24,0,0,1,224,48ZM188,200H52a4,4,0,0,0-4,4v12a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V204A4,4,0,0,0,188,200Z" fill="currentColor"/></>,
  duotone: <><path d="M56,192H184v24a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8Z" opacity="0.2" fill="currentColor"/><path d="M216,152V48a16,16,0,0,0-16-16h0a16,16,0,0,0-16,16V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H200" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const TowelIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
