import React, { useEffect, useRef, useState } from 'react';
import { useIsInViewport } from '../../hooks';
import './Hightlight.scss'

export interface Props {
  children: React.ReactNode;
}


