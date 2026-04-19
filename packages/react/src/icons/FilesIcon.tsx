import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h80l40,40V216A8,8,0,0,1,168,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,64V40a8,8,0,0,1,8-8h80l40,40V184a8,8,0,0,1-8,8H176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h80l40,40V216A8,8,0,0,1,168,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,64V40a8,8,0,0,1,8-8h80l40,40V184a8,8,0,0,1-8,8H176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h80l40,40V216A8,8,0,0,1,168,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,64V40a8,8,0,0,1,8-8h80l40,40V184a8,8,0,0,1-8,8H176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M164,224H56a8,8,0,0,1-8-8V76a8,8,0,0,1,8-8h76l40,40V216A8,8,0,0,1,164,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M84,68V36a8,8,0,0,1,8-8h80l40,40V176a8,8,0,0,1-8,8H172" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h80l40,40V216A8,8,0,0,1,168,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,64V40a8,8,0,0,1,8-8h80l40,40V184a8,8,0,0,1-8,8H176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const FilesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
