import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="72" y="40" width="144" height="144" rx="8" strokeWidth="8" className="draw-line"/><circle cx="120" cy="88" r="16" strokeWidth="8" className="draw-line"/><path d="M184,184v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H72" strokeWidth="8" className="draw-line"/><path d="M96.69,184l77.65-77.66a8,8,0,0,1,11.32,0L216,136.69" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="72" y="40" width="144" height="144" rx="8" strokeWidth="12" className="draw-line"/><circle cx="120" cy="88" r="16" strokeWidth="12" className="draw-line"/><path d="M184,184v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H72" strokeWidth="12" className="draw-line"/><path d="M96.69,184l77.65-77.66a8,8,0,0,1,11.32,0L216,136.69" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="72" y="40" width="144" height="144" rx="8" strokeWidth="16" className="draw-line"/><circle cx="120" cy="88" r="16" strokeWidth="16" className="draw-line"/><path d="M184,184v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H72" strokeWidth="16" className="draw-line"/><path d="M96.69,184l77.65-77.66a8,8,0,0,1,11.32,0L216,136.69" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="80" y="40" width="136" height="136" rx="8" strokeWidth="24" className="draw-line"/><circle cx="128" cy="88" r="20" fill="currentColor"/><path d="M184,176v32a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80" strokeWidth="24" className="draw-line"/><path d="M108.69,176l65.65-65.66a8,8,0,0,1,11.32,0L216,140.69" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H80A16,16,0,0,0,64,48V64H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V192h16a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,48H208v69.38l-16.7-16.7a16,16,0,0,0-22.62,0L93.37,176H80Zm96,160H48V80H64v96a16,16,0,0,0,16,16h96ZM104,88a16,16,0,1,1,16,16A16,16,0,0,1,104,88Z" fill="currentColor"/></>,
  duotone: <><path d="M208,40H80a8,8,0,0,0-8,8V176a8,8,0,0,0,8,8H96.69l77.65-77.66a8,8,0,0,1,11.32,0L216,136.69V48A8,8,0,0,0,208,40Zm-88,64a16,16,0,1,1,16-16A16,16,0,0,1,120,104Z" opacity="0.2" fill="currentColor"/><rect x="72" y="40" width="144" height="144" rx="8" strokeWidth="16" className="draw-line"/><circle cx="120" cy="88" r="16" strokeWidth="16" className="draw-line"/><path d="M184,184v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H72" strokeWidth="16" className="draw-line"/><path d="M96.69,184l77.65-77.66a8,8,0,0,1,11.32,0L216,136.69" strokeWidth="16" className="draw-line"/></>,
};

export const ImagesSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
