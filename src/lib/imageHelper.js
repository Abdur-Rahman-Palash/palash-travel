import images from './images';

export function img(name) {
  if (!name) return '';
  return images[name] || import.meta.env.BASE_URL + 'images/' + name;
}

export default { img };
