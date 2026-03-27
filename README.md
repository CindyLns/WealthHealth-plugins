# My React Library - Fenêtre modale

Un composant simple et réutilisable de fenêtre modale construit avec React et styled-components.

## 🛠️ Technologies utilisées

- ⚛️ React
- 💅 styled-components
- 🧠 JS

## 📦 Installation

```bash
npm install react-modal-cindy
```
## 🎯 Utilisation

Importez et utilisez les composants dans votre application :

```jsx
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>

      <ModalDialog
        isOpen={isOpen}
        title="Titre de la modale"
        message="Ceci est un message dans la modale."
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
}
```
## 🧩​ Props

| Prop         | Type     | Requis | Description                            |
| ------------ | -------- | ------ | -------------------------------------- |
| `isOpen`     | boolean  | ✅      | Contrôle l'affichage de la modale      |
| `title`      | string   | ✅      | Titre affiché dans la modale           |
| `message`    | string   | ✅      | Contenu principal                      |
| `closeModal` | function | ✅      | Fonction appelée pour fermer la modale |

## 🚀 Fonctionnalités

- Affichage conditionnel via isOpen
- Fermeture via un bouton (callback closeModal)
- Overlay semi-transparent
- Contenu centré avec effet de profondeur (shadow)
- Scroll automatique si contenu long
- Styles encapsulés avec styled-components

## 🪪 Licence

MIT