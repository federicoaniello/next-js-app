"use client";
import React, { ForwardedRef, forwardRef } from "react";
import styles from "./Input.module.scss";

interface Props {
  type: string;
  min?: string;
  max?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(function InputFun(
  props: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  return <input className={styles.input} {...props} ref={ref}></input>;
});

export default Input;
