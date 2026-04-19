import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="-20" y="108" width="176" height="40" rx="8" transform="translate(196 60) rotate(90)" strokeWidth="8" className="draw-line"/><rect x="52" y="108" width="176" height="40" rx="8" transform="translate(268 -12) rotate(90)" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="-20" y="108" width="176" height="40" rx="8" transform="translate(196 60) rotate(90)" strokeWidth="12" className="draw-line"/><rect x="52" y="108" width="176" height="40" rx="8" transform="translate(268 -12) rotate(90)" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="-20" y="108" width="176" height="40" rx="8" transform="translate(196 60) rotate(90)" strokeWidth="16" className="draw-line"/><rect x="52" y="108" width="176" height="40" rx="8" transform="translate(268 -12) rotate(90)" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="-20" y="108" width="176" height="40" rx="8" transform="translate(196 60) rotate(90)" strokeWidth="24" className="draw-line"/><rect x="56" y="108" width="176" height="40" rx="8" transform="translate(272 -16) rotate(90)" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M96,48V208a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H80A16,16,0,0,1,96,48Zm56-16H128a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,152,32Zm88,88H224V104a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V136h16a8,8,0,0,0,0-16Z" fill="currentColor"/></>,
  duotone: <><rect x="-20" y="108" width="176" height="40" rx="8" transform="translate(196 60) rotate(90)" opacity="0.2" fill="currentColor"/><rect x="52" y="108" width="176" height="40" rx="8" transform="translate(268 -12) rotate(90)" opacity="0.2" fill="currentColor"/><rect x="-20" y="108" width="176" height="40" rx="8" transform="translate(196 60) rotate(90)" strokeWidth="16" className="draw-line"/><rect x="52" y="108" width="176" height="40" rx="8" transform="translate(268 -12) rotate(90)" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const ColumnsPlusRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
