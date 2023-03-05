import * as basicLightbox from 'basiclightbox';

export const Modal = ({ image }) => {
  const instance = basicLightbox.create(
    `<img src=${image} width="800" height="600">`
  );
  return <div>{instance.show()}</div>;
};
