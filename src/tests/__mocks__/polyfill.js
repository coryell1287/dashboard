global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
};

const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.sessionStorage = sessionStorageMock;
global.window.location.reload = jest.fn();

