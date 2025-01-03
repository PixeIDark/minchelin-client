import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ComponentProps,
} from 'react';
import { createStyleContext } from '@shadow-panda/style-context';
import { styled } from '@/styled-system/jsx';
import { dropdown } from '@/styled-system/recipes';

// 드롭다운 variants 타입 정의
type DropdownVariants = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'ghost';
};

// 드롭다운 상태 컨텍스트 타입
interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedItem: string | null;
  handleSelect: (item: string) => void;
}

// Props 타입 정의
type DropdownBaseProps = {
  onSelect?: (item: string) => void;
  children: React.ReactNode;
} & DropdownVariants;

type DropdownProps = Omit<ComponentProps<typeof DropdownRoot>, keyof DropdownBaseProps> &
  DropdownBaseProps;

type DropdownItemProps = Omit<ComponentProps<typeof DropdownItemBase>, 'value'> & {
  value: string;
  children: React.ReactNode;
};

// 스타일 컨텍스트 생성
const { withProvider, withContext } = createStyleContext(dropdown);

// 드롭다운 상태 컨텍스트
const DropdownContext = createContext<DropdownContextType | null>(null);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('드롭다운 컴포넌트 내부에서만 사용할 수 있습니다.');
  }
  return context;
};

// 베이스 컴포넌트들
const DropdownRoot = styled('div');
const DropdownTriggerBase = styled('div');
const DropdownMenuBase = styled('div');
const DropdownItemBase = styled('div');

// 하위 컴포넌트들
const Trigger: React.FC<ComponentProps<typeof DropdownTriggerBase>> = ({ children, ...props }) => {
  const { isOpen, setIsOpen } = useDropdown();
  return (
    <DropdownTriggerBase onClick={() => setIsOpen(!isOpen)} {...props}>
      {children}
    </DropdownTriggerBase>
  );
};

const Menu: React.FC<ComponentProps<typeof DropdownMenuBase>> = ({ children, ...props }) => {
  const { isOpen } = useDropdown();
  return (
    <DropdownMenuBase data-state={isOpen ? 'open' : 'closed'} {...props}>
      {children}
    </DropdownMenuBase>
  );
};

const Item: React.FC<DropdownItemProps> = ({ children, value, ...props }) => {
  const { selectedItem, handleSelect } = useDropdown();
  const isSelected = selectedItem === value;

  return (
    <DropdownItemBase onClick={() => handleSelect(value)} data-selected={isSelected} {...props}>
      {children}
    </DropdownItemBase>
  );
};

// 메인 드롭다운 컴포넌트
const DropdownComponent: React.FC<DropdownProps> = ({
  children,
  onSelect,
  size,
  variant,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onSelect?.(item);
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedItem,
        handleSelect,
      }}
    >
      <DropdownRoot ref={dropdownRef} size={size} variant={variant} {...props}>
        {children}
      </DropdownRoot>
    </DropdownContext.Provider>
  );
};

// 스타일이 적용된 하위 컴포넌트들
const StyledTrigger = withContext(Trigger, 'trigger');
const StyledMenu = withContext(Menu, 'menu');
const StyledItem = withContext(Item, 'item');

// 최종 드롭다운 컴포넌트 타입
interface DropdownComponentType extends React.FC<DropdownProps> {
  Trigger: typeof StyledTrigger;
  Menu: typeof StyledMenu;
  Item: typeof StyledItem;
}

// 최종 드롭다운 컴포넌트 생성
const StyledDropdown = withProvider(DropdownComponent, 'root');
const Dropdown = StyledDropdown as unknown as DropdownComponentType;

Dropdown.Trigger = StyledTrigger;
Dropdown.Menu = StyledMenu;
Dropdown.Item = StyledItem;

export { Dropdown };
export type { DropdownProps, DropdownItemProps, DropdownVariants };
