import React from 'react';
import { Info, CheckCircle, AlertTriangle, AlertCircle, X } from 'lucide-react';


interface AlertProps{
  type?:'warning'|'error'|'success'|'info';
  message:string;
  description?: string ;
  icon?:React.ReactNode;
  dismissible?:boolean;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  type = 'warning',
  message,
  description,
  icon,
  dismissible = false,
  onClose
}) => {
  const getDefaultIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'error':
        return <AlertCircle className="w-5 h-5" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />;
      case 'info':
        return <Info className="w-5 h-5" />;
      default:
        return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const getAlertStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-orange-50 border-orange-200 text-orange-800';
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      case 'warning':
        return 'text-orange-600';
      case 'info':
        return 'text-blue-600';
      default:
        return 'text-orange-600';
    }
  };

  const getCloseButtonColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-600 hover:text-green-800 hover:bg-green-100';
      case 'error':
        return 'text-red-600 hover:text-red-800 hover:bg-red-100';
      case 'warning':
        return 'text-orange-600 hover:text-orange-800 hover:bg-orange-100';
      case 'info':
        return 'text-blue-600 hover:text-blue-800 hover:bg-blue-100';
      default:
        return 'text-orange-600 hover:text-orange-800 hover:bg-orange-100';
    }
  };

  return (
    <div className={`flex items-start p-4 border rounded-lg ${getAlertStyles()}`}>
      <div className={`flex-shrink-0 ${getIconColor()}`}>
        {icon || getDefaultIcon()}
      </div>
      
    
      <div className="ml-3 flex-1">
  <div className="flex items-center justify-between gap-2">
    <div className="font-medium ">{message}</div>
    {description && (
      <div className="text-sm opacity-90">{description}</div>
    )}
  </div>
</div>


      {dismissible && onClose && (
    <button
      onClick={onClose}
      className={`ml-auto flex items-center gap-2 flex-shrink-0 p-1 rounded-md transition-colors ${getCloseButtonColor()}`}
    >
      <span className="block w-px h-5 bg-gray-400 opacity-40"></span>
      <X className="w-4 h-4" />
    </button>
  )}
    </div>
  );
};
export default Alert;