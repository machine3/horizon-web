import { useModel } from 'umi';
import React from 'react';
import { NotFount } from '../State';
import { API } from '@/services/typings';

export interface WithInitialStateProps {
  initialState: API.InitialState,
}

export default function PageWithInitialState<Props extends WithInitialStateProps>(
  WrappedComponent: React.ComponentType<Props>,
): React.FC<Omit<Props, 'initialState'>> {
  type InnerProps = Omit<Props, 'initialState'>;
  return function WithInitialPage(props: InnerProps): React.ReactElement {
    const { initialState, loading } = useModel('@@initialState');
    if (loading || !initialState) {
      return <NotFount />;
    }

    const unionProps = {
      initialState, ...props,
    } as Props;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...unionProps} />;
  };
}
