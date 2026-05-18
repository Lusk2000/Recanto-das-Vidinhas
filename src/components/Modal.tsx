import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ModalContent } from '../types';

interface ModalProps {
  modalContent: ModalContent | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ modalContent, onClose }) => {
  return (
    <AnimatePresence>
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#334155]/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-4xl max-h-[85vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border-4 border-[#00AEEF]/20"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#F0F9FF]">
              <h2 className="text-2xl font-black text-[#334155]">{modalContent.title}</h2>
              <button 
                onClick={onClose} 
                aria-label="Fechar Modal" 
                className="p-2 bg-white rounded-full text-gray-500 hover:text-red-500 shadow-sm hover:bg-gray-50 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 md:p-12 overflow-y-auto text-[#475569] prose prose-blue max-w-none">
              <div 
                className="markdown-body"
                dangerouslySetInnerHTML={{ __html: modalContent.html }} 
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
