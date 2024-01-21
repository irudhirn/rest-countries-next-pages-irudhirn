import React from 'react';

import Error from '@/components/error/error';

export default function ServerErrorPage() {
  return (
    <Error code={"500"} />
  )
}
