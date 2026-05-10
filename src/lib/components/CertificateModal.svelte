<script lang="ts">
	let {
		imageUrl,
		title,
		isOpen,
		onClose
	}: {
		imageUrl: string;
		title: string;
		isOpen: boolean;
		onClose: () => void;
	} = $props();

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			onClose();
		}
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (isOpen) {
			handleKeydown(event);
		}
	}

	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window onkeydown={handleWindowKeydown} />

{#if isOpen}
	<div
		class="fixed inset-0 z-300 flex animate-[fadeIn_var(--transition-base)] items-center justify-center overscroll-contain"
	>
		<button
			type="button"
			class="absolute inset-0 bg-black/80"
			aria-label="關閉證書預覽"
			onclick={onClose}
		></button>
		<div
			class="relative z-1 mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col border border-border bg-bg-secondary"
			role="dialog"
			aria-modal="true"
			aria-label={title}
		>
			<div class="flex items-center justify-between border-b border-border px-6 py-4">
				<h3 class="text-lg font-medium text-text-primary">{title}</h3>
				<button
					type="button"
					onclick={onClose}
					class="text-text-muted transition-colors duration-(--transition-fast) hover:text-text-primary"
					aria-label="關閉"
				>
					✕
				</button>
			</div>
			<div class="flex items-center justify-center overflow-auto p-6">
				<img
					src={imageUrl}
					alt={title}
					width="1200"
					height="900"
					loading="lazy"
					decoding="async"
					class="max-h-[80vh] w-auto object-contain"
				/>
			</div>
		</div>
	</div>
{/if}
