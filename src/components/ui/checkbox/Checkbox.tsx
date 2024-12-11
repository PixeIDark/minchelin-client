'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { styled } from '@/styled-system/jsx';
import { cx } from '@/styled-system/css';
import { checkbox, icon } from '@/styled-system/recipes';

const BaseCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const styles = checkbox();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <CheckboxPrimitive.Root ref={ref} className={cx('peer', styles.root, className)} {...props}>
        <CheckboxPrimitive.Indicator className={styles.indicator}>
          <Check className={icon()} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {props.children}
    </div>
  );
});

BaseCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export const Checkbox = styled(BaseCheckbox);
