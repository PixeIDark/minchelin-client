// components/ui/dropdown/Dropdown.tsx
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ComponentProps,
  useCallback,
} from 'react';
import { createStyleContext } from '@shadow-panda/style-context';
import { styled } from '@/styled-system/jsx';
import { dropdown } from '@/styled-system/recipes';

// 드롭다운 상태 관리
interface DropdownState {
  [id: string]: boolean;
}

const dropdownStates: DropdownState = {};
const listeners = new Set<() => void>();

export const dropdownStore = {
  getState: (id: string) => dropdownStates[id] || false,
  setState: (id: string, isOpen: boolean) => {
    dropdownStates[id] = isOpen;
    listeners.forEach((listener) => listener());
  },
  subscribe: (listener: () => void): (() => void) => {
    // 반환 타입 명시
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
      return; // void 반환 명시
    };
  },
};

export function useDropdownState(id?: string) {
  const [localIsOpen, setLocalIsOpen] = useState(false);

  useEffect(() => {
    if (!id) return;

    const unsubscribe = dropdownStore.subscribe(() => {
      setLocalIsOpen(dropdownStore.getState(id));
    });
    return () => {
      unsubscribe(); // void 반환하는 함수로 실행
    };
  }, [id]);

  const setIsOpen = useCallback(
    (open: boolean) => {
      if (id) {
        dropdownStore.setState(id, open);
      } else {
        setLocalIsOpen(open);
      }
    },
    [id]
  );

  const isOpen = id ? dropdownStore.getState(id) : localIsOpen;

  return { isOpen, setIsOpen };
}

// 드롭다운 variants 타입 정의
type DropdownSize = 'sm' | 'md' | 'lg' | 'search';
type DropdownVariant = 'outline' | 'ghost' | 'search';

interface DropdownVariants {
  size?: DropdownSize;
  variant?: DropdownVariant;
}

// 드롭다운 상태 컨텍스트 타입
interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedItem: string | null;
  handleSelect: (item: string) => void;
}

// Props 타입 정의
type DropdownBaseProps = {
  id?: string; // optional id 추가
  onSelect?: (item: string) => void;
  children: React.ReactNode;
};

type DropdownProps = DropdownBaseProps & {
  size?: DropdownVariants['size'];
  variant?: DropdownVariants['variant'];
};

type DropdownItemProps = {
  value: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof DropdownItemBase>, 'value'>;

const { withProvider, withContext } = createStyleContext(dropdown);

const DropdownContext = createContext<DropdownContextType | null>(null);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('드롭다운 컴포넌트 내부에서만 사용할 수 있습니다.');
  }
  return context;
};

const DropdownRoot = styled('div', dropdown);
const DropdownTriggerBase = styled('div', dropdown);
const DropdownMenuBase = styled('div', dropdown);
const DropdownItemBase = styled('div', dropdown);

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

const DropdownComponent = ({ id, children, onSelect, size, variant, ...props }: DropdownProps) => {
  const { isOpen, setIsOpen } = useDropdownState(id);
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
  }, [setIsOpen]);

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

const StyledTrigger = withContext(Trigger, 'trigger');
const StyledMenu = withContext(Menu, 'menu');
const StyledItem = withContext(Item, 'item');

interface DropdownComponentType {
  Trigger: typeof StyledTrigger;
  Menu: typeof StyledMenu;
  Item: typeof StyledItem;
  (props: DropdownProps): JSX.Element;
}

const StyledDropdown = withProvider(DropdownComponent, 'root');
const Dropdown = StyledDropdown as unknown as DropdownComponentType;

Dropdown.Trigger = StyledTrigger;
Dropdown.Menu = StyledMenu;
Dropdown.Item = StyledItem;

export { Dropdown };
export type { DropdownProps, DropdownItemProps, DropdownVariants, DropdownSize, DropdownVariant };
