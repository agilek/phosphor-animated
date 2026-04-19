import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const OctagonIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
