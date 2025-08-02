import {
  useState,
  // useEffect,
  useCallback,
} from "react";

type MousePos = {
  x: number;
  y: number;
  offsetCenterX: number;
  offsetCenterY: number;
};

const DefaultMousePos: MousePos = {
  x: 0,
  y: 0,
  offsetCenterX: 0,
  offsetCenterY: 0,
};

export const useMousePosOnElement = (
  targetRef: React.RefObject<HTMLElement | null>
) => {
  const [pos, setPos] = useState<MousePos>(DefaultMousePos);

  const updatePos = useCallback(
    (e: React.MouseEvent) => {
      if (!targetRef.current) return;
      const clientRect = targetRef.current.getBoundingClientRect();
      const pointerX = e.pageX - (clientRect.left + window.pageXOffset);
      const pointerY = e.pageY - (clientRect.top + window.pageYOffset);
      const x =
        pointerX < 0
          ? 0
          : pointerX > targetRef.current.clientWidth
          ? targetRef.current.clientWidth
          : pointerX;
      const y =
        pointerY < 0
          ? 0
          : pointerY > targetRef.current.clientHeight
          ? targetRef.current.clientHeight
          : pointerY;
      const offsetCenterX = x - targetRef.current.clientWidth / 2;
      const offsetCenterY = y - targetRef.current.clientHeight / 2;
      setPos({ x, y, offsetCenterX, offsetCenterY });
    },
    [targetRef]
  );

  const resetPos = useCallback(() => {
    setPos(DefaultMousePos);
  }, []);

  // NOTE: マウス操作時に位置取得以外にも実行したい処理がある場合が多いため、下記の処理は利用しない判断（記述方法として覚えておきたいのでコメントアウトで残しておく）
  // useEffect(() => {
  //   const element = targetRef.current;
  //   if (!element) return;

  //   // イベントリスナーを追加
  //   element.addEventListener("mouseenter", updatePos);
  //   element.addEventListener("mousemove", updatePos);
  //   element.addEventListener("mouseleave", updatePos);

  //   // クリーンアップ関数でイベントリスナーを削除
  //   return () => {
  //     element.removeEventListener("mouseenter", updatePos);
  //     element.removeEventListener("mousemove", updatePos);
  //     element.removeEventListener("mouseleave", updatePos);
  //   };
  // }, [targetRef, updatePos]);

  return {
    pos,
    updatePos, // 手動で呼び出したい場合のために残しておく
    resetPos, // 手動でリセットしたい場合のために追加
  };
};
