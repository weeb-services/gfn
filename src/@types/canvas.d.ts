declare module 'canvas' {
	export class Canvas {
		public get width(): number;
		public get height(): number;
		public getContext(context: string): CanvasRenderingContext2D;
	}

	export class CanvasRenderingContext2D {
		public fillStyle: string;
		public globalCompositeOperation: string;
		public font: string;
		public get canvas(): Canvas;
		public drawImage(image: Canvas | Image, x: number, y: number, width?: number, height?: number): void;
		public fillRect(x: number, y: number, width: number, height: number): void;
		public translate(x: number, y: number): void;
		public rotate(angle: number): void;
		public measureText(text: string): { width: number, height: number };
		public fillText(text: string, x: number, y: number): void;
		public strokeText(text: string, x: number, y: number): void;
		public save(): void;
		public restore(): void;
	}

	export class Image {
		public src: Buffer;
		public get width(): number;
		public get height(): number;
	}

	function createCanvas(width: number, height: number): Canvas;
}
