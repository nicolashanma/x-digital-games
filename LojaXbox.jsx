import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Xbox } from "lucide-react";

export default function LojaXbox() {
  const jogos = [
    {
      nome: "Elden Ring",
      preco: "R$ 89,90",
      imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202107/2621/czHIkHfUnEFsDqqNkzQ7ZpWY.png",
    },
    {
      nome: "GTA V Premium Edition",
      preco: "R$ 39,90",
      imagem: "https://cdn-products.eneba.com/resized-products/sXwVqVY0D4uGBzkUYpTzdkB1zM_vvmjR1WX8kFv2Y8s_350x200_1x-0.jpeg",
    },
    {
      nome: "Call of Duty: Modern Warfare II",
      preco: "R$ 99,90",
      imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1221/6RYDoOYfqQeDMPV6nxtmCNsS.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Xbox className="text-green-500" /> XDigital Games
        </h1>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
          Ver Carrinho <ShoppingCart className="ml-2" />
        </Button>
      </header>

      <h2 className="text-xl font-semibold mb-4">🔥 Promoções da Semana</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jogos.map((jogo, index) => (
          <Card key={index} className="bg-zinc-900 text-white border-zinc-700">
            <CardContent className="p-4">
              <img src={jogo.imagem} alt={jogo.nome} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{jogo.nome}</h3>
              <p className="text-green-400 mb-4">{jogo.preco}</p>
              <a
                href={`https://wa.me/5599999999999?text=Quero%20comprar%20o%20jogo%20${encodeURIComponent(jogo.nome)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700">Comprar via WhatsApp</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
