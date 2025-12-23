
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Mentoria Joe Neris. Todos os direitos reservados.
          </div>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
