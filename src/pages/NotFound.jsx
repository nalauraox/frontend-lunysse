import { Link } from 'react-router-dom'; // Importa Link para navegação SPA
import { Button } from '../components/Button'; // Componente de botão customizado
import { Card } from '../components/Card'; // Componente de card estilizado
import { Home } from 'lucide-react'; // Ícone da biblioteca Lucide

// Corrigido: função NotFound precisa de `function` ou `=>` corretamente
export const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            {/* Container centralizado verticalmente */}
            <Card className="text-center max-w-md">
                <div className="mb-6">
                    {/* Corrigido: tag <div> estava sem fechamento */}
                    
                    {/* Corrigido: classe 'text-6x1' -> 'text-6xl' */}
                    <h1 className="text-6xl font-bold text-light mb-4">404</h1>

                    {/* Corrigido: classe 'text-2x1' -> 'text-2xl' */}
                    <h2 className="text-2xl font-semibold text-dark mb-2">
                        Página não encontrada
                    </h2>

                    {/* Corrigido: frase mal escrita + fechamento da tag <p> */}
                    <p className="text-dark/70">
                        Ops! A página que você está procurando não existe ou foi movida.
                    </p>
                </div>

                {/* Botão com ícone para voltar ao início */}
                <Link to="/dashboard">
                    <Button className="flex items-center gap-2 mx-auto mt-4">
                        <Home size={20} />
                        Voltar ao Início
                    </Button>
                </Link>
            </Card>
        </div>
    );
};