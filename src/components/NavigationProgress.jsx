import { useNavigation } from 'react-router';

// Toimii vain Data Mode -routerin sisällä (useNavigation).
export default function NavigationProgress() {
  const navigation = useNavigation();
  if (navigation.state === 'idle') return null;
  return (
    <div className="navigation-progress" role="status">
      Router lataa seuraavaa sivua... edellinen sivu pysyy näkyvissä.
    </div>
  );
}
