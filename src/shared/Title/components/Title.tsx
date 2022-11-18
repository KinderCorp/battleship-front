// import de l'Icon
import classNames from 'clsx';
import { useMemo } from 'react';



/**
 * Title component.
 * 
 * @return {JSX.Element}
 */

export interface Props {
    title: string,
    subtitle?: string,
    className?: '';
    type : string,
    // iconName: Icon, // Models icon, sera défini lorsque la PR sur les composants icones sera faites 
}

export type TitleType = |'h1'|'h2'|'h3'|'h4';

/**
 * Title component.
 *
 * @param {Props} props Title props
 * @return {JSX.Element}
 */
export const Title = ({ type, title, subtitle, className }: Props): JSX.Element => {
  const TitleComponent = type;

  const titleclassName = useMemo(
    (): string => classNames('title', className),
    [className],
  );

  return (
    <>
      <TitleComponent className={titleclassName} type="">{title}</TitleComponent>
      {subtitle && <p>{subtitle}</p>}
    </>
  );
};
  
export default Title;
