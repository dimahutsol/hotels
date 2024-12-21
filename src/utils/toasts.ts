import toast, { ToastPosition } from 'react-hot-toast';

export const showToast = (text: string, type: 'success' | 'error') => {
  const config = {
    position: 'top-center' as ToastPosition,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  };

  return type === 'success' ? toast.success(text, config) : toast.error(text, config);
};
