import { ReactNode } from 'react';
import { STATUSES } from '../../services/types';
import { useStore } from '../../store';
import { Spinner } from './spinner';

type Props = {
  children: ReactNode;
};
const Preloader = ({ children }: Props) => {
  const isShown: boolean = useStore(state => state.status === STATUSES.fetching);

  return (
    <>
      {isShown ? <Spinner /> : null}
      {children}
    </>
  );
};

export default Preloader;
