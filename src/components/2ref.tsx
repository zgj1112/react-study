/**
 * React Ref 的三种主要用法示例:
 * 
 * 1. DOM引用 (访问DOM节点)
 *    - 使用 useRef<HTMLElement> 创建引用
 *    - 通过 ref 属性绑定到 DOM 元素
 *    - 可以直接操作 DOM，如修改样式、获取尺寸等
 * 
 * 2. 值引用 (保存可变值)
 *    - 用于存储任意值，且在组件重渲染时保持不变
 *    - 修改 .current 不会触发组件重渲染
 *    - 常用于存储计数器、定时器ID等
 * 
 * 3. 组件引用 (调用子组件方法)
 *    - 使用 forwardRef 和 useImperativeHandle 暴露子组件方法
 *    - 父组件可以调用子组件的指定方法
 *    - 需要定义 ref 的类型接口
 */

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

// 定义子组件的 ref 类型
export interface ChildRefType {
  focusInput: () => void;
  clearInput: () => void;
}

// 创建一个可以被父组件引用的子组件
const ChildInput = forwardRef<ChildRefType, { placeholder: string }>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 暴露方法给父组件
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current?.focus();
    },
    clearInput: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={props.placeholder}
      style={{ padding: '8px', margin: '10px' }}
    />
  );
});

const RefDemo: React.FC = () => {
  // 1. DOM引用
  const divRef = useRef<HTMLDivElement>(null);
  
  // 2. 值引用（不会触发重渲染）
  const countRef = useRef<number>(0);
  
  // 3. 子组件引用
  const childRef = useRef<ChildRefType>(null);

  // 组件挂载时的效果
  useEffect(() => {
    console.log('组件已挂载，div元素：', divRef.current);
  }, []);

  // 处理点击事件
  const handleDivClick = () => {
    if (divRef.current) {
      // 修改DOM样式
      divRef.current.style.backgroundColor = 
        divRef.current.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
    }
    // 更新计数（不会触发重渲染）
    countRef.current += 1;
    console.log('点击次数：', countRef.current);
  };

  // 操作子组件
  const handleChildControl = (action: 'focus' | 'clear') => {
    if (childRef.current) {
      if (action === 'focus') {
        childRef.current.focusInput();
      } else {
        childRef.current.clearInput();
      }
    }
  };

  return (
    <div className="ref-demo">
      <h2>Ref 使用示例</h2>
      
      {/* 1. DOM Ref示例 */}
      <div
        ref={divRef}
        onClick={handleDivClick}
        style={{
          padding: '20px',
          backgroundColor: 'lightblue',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        点击切换颜色的div (点击次数: {countRef.current})
      </div>

      {/* 2. 子组件 Ref示例 */}
      <div style={{ marginBottom: '20px' }}>
        <ChildInput ref={childRef} placeholder="这是一个受控的输入框" />
        <div>
          <button 
            onClick={() => handleChildControl('focus')}
            style={{ marginRight: '10px' }}
          >
            聚焦输入框
          </button>
          <button 
            onClick={() => handleChildControl('clear')}
          >
            清空输入框
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefDemo; 