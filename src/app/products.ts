export interface Product {
  id: string;
  name: string;
  description: string;
}

export const products = [
  {
    id: 'acquire-image',
    name: 'Acquire Image',
    description: 'The basic document scanning functionality',
  },
  {
    id: 'image-editor',
    name: 'Image Editor',
    description: 'Image editing: rotate, mirror, flip and more',
  },
];

