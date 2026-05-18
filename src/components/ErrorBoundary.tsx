import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F0F9FF] p-6 text-center">
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-[#FF4B4B]/20 max-w-lg">
            <div className="bg-[#FF4B4B]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertCircle className="w-12 h-12 text-[#FF4B4B]" />
            </div>
            <h1 className="text-3xl font-black text-[#334155] mb-4">Ops! Algo deu errado.</h1>
            <p className="text-[#475569] font-semibold mb-8">
              Lamentamos o inconveniente. Por favor, tente recarregar a página.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-[#00AEEF] text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 mx-auto hover:bg-[#0095CC] transition-all"
            >
              <RefreshCw className="w-6 h-6" /> Recarregar Página
            </button>
            {process.env.NODE_ENV === 'development' && (
              <pre className="mt-8 p-4 bg-gray-100 rounded-xl text-left text-xs overflow-auto max-h-40">
                {this.state.error?.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
