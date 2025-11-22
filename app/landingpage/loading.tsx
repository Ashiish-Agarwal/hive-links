'use client';
import { Spinner, type SpinnerProps } from '@/components/ui/shadcn-io/spinner';
const variants: SpinnerProps['variant'][] = [
//   'default',
//   'circle',
//   'pinwheel',
//   'circle-filled',
//   'ellipsis',
  'ring',
//   'bars',
//   'infinite',
];

export default function Loading() {
  // Or a custom loading skeleton component
  return (

      <div className="h-screen w-full flex items-center justify-center ">
    {variants.map((variant) => (
      <div
        className="flex flex-col items-center justify-center gap-4"
        key={variant}
      >
        <Spinner key={variant} variant={variant} />
        <span className="font-mono text-muted-foreground text-xs text-center ">
         
           Loading ...
        </span>
      </div>
    ))}
  </div>

    )
}