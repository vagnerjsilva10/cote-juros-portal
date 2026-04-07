type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  return (
    <span className={className ? `material-symbols-outlined ${className}` : 'material-symbols-outlined'}>
      {name}
    </span>
  );
}
