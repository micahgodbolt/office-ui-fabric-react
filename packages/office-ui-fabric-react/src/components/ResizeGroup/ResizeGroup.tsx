import * as React from 'react';
import {
  css,
  BaseComponent
} from '../../Utilities';
import { IResizeGroupProps } from './ResizeGroup.Props';
import styles = require('./ResizeGroup.scss');

export interface IResizeGroupState<T> {
  props: T;
  shouldMeasure: boolean;
}

export class ResizeGroup<T> extends BaseComponent<IResizeGroupProps<T>, IResizeGroupState<T>> {

  private _root: HTMLElement;
  private _measured: HTMLElement;

  constructor(props: IResizeGroupProps<T>) {
    super(props);
    this.state = {
      props: null,
      shouldMeasure: true
    }
  }

  public componentDidMount() {
    this._measureItems();
    this._events.on(window, 'resize', this._onResize);
  }

  public render(): JSX.Element {
    let { onRender, onReduce } = this.props;
    let { props, shouldMeasure } = this.state;
    const data: T = onReduce(props);

    return (
      <div ref={ this._resolveRef('_root') }>
        { shouldMeasure ? (
          <div className={ css(styles.measured) } ref={ this._resolveRef('_measured') }>
            { onRender(data) }
          </div>
        ) : onRender(data) }

      </div>

    );
  }

  public componentDidUpdate(prevProps: IResizeGroupProps<T>) {
    this._measureItems();
  }

  protected _onResize() {
    this.setState({ shouldMeasure: true });
  }

  private _measureItems() {
    let { onRender, onReduce } = this.props;

    if (this.state.shouldMeasure) {
      let container = this._root.getBoundingClientRect();
      let measured = this._measured.getBoundingClientRect();
      if ((measured.width > container.width)) {
        this.setState((prevState, props) => {
          return {
            props: this.data,
          };
        });
      } else {
        this.setState((prevState, props) => {
          return {
            filteredProps: prevState.filteredProps,
            originalProps: prevState.originalProps,
            shouldMeasure: false
          };
        });
      }
    }
  }
}
