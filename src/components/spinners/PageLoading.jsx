import React from 'react';
import { RingLoader } from 'react-spinners';
import { withTheme } from "@callstack/react-theme-provider";

const override = `
    display: block;
`;
 
class PageLoading extends React.Component {
  render() {
    return (
      <div className={'main__page-loading-wrapper--' + this.props.loading}>
        <div className='main__page-loading-wrapper__page-loading-container'>
            <RingLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={this.props.theme.spinnerColor}
            loading={this.props.loading}
            />
        </div>
      </div> 
    )
  }
}

export default withTheme(PageLoading);