import { Injectable, Optional } from '@angular/core';
import Dynamsoft from 'dwt';

@Injectable({
  providedIn: 'root'
})
export class DynamicWebTWAINService {

  constructor() {
    Dynamsoft.DWT.ProductKey = "t0194AgYAAIaMbdYXnFm8QbvdLG2Jlfvp+k98MGRtSfxzwzJz7nFMH38RHXJmg9PpSPpmnizlHTRkRWIfGtSDHDfYbWOdU/25mek5Pc60PEYrQ7RCQ7QYo+WrWqK4DEP5/uY/Nc/hDLwWQNYDsgJogVJOB7xtLQ8awBogCiBaDdCAw1Xs95+pj0z7Vtl/OnXyAKfc72yTco8TA5x8yZkC4lIoPmm1cwHQnpwNwBoghwDqT20XEOoB1gDZAREmOFjzBSNaLcA=";
    Dynamsoft.DWT.ResourcesPath = "assets/dynamic-web-twain";
  }
}
