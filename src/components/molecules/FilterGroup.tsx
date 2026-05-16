import { Button } from '../atoms/Button';

interface FilterOption<T extends string> {
  key: T;
  label: string;
}

interface FilterGroupProps<T extends string> {
  options: readonly FilterOption<T>[];
  activeKey: T;
  onChange: (key: T) => void;
  className?: string;
}

export const FilterGroup = <T extends string>({ 
  options, 
  activeKey, 
  onChange, 
  className = '' 
}: FilterGroupProps<T>) => {
  return (
    <div className={`project-filters ${className}`.trim()}>
      {options.map(({ key, label }) => (
        <Button
          key={key}
          variant="tab"
          active={activeKey === key}
          onClick={() => onChange(key)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
