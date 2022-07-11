import React, { useState, forwardRef } from 'react';
import { setting } from '../preset';

export default WrappedComponent =>
  forwardRef(({ data, initCurrent, pageSize, params, ...props }, ref) => {
    const [pageParams, setPageParams] = useState({
      current: initCurrent || setting.withPage.initCurrent,
      size: pageSize
    });
    return (
      <WrappedComponent
        ref={ref}
        {...props}
        params={Object.assign(
          {},
          params,
          setting.withPage.transform({
            page: pageParams.current,
            size: pageParams.size
          })
        )}
        data={Object.assign(
          {},
          data,
          setting.withPage.transform({
            page: pageParams.current,
            size: pageParams.size
          })
        )}
        onPageChange={(page, size) => {
          setPageParams({ current: page, size });
        }}
      />
    );
  });
