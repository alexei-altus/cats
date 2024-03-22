import { createFileRoute } from '@tanstack/react-router';
import Input from '@/pages/SearchParams/Input';

export const Route = createFileRoute('/searchParams/')({
  component: Input,
});
