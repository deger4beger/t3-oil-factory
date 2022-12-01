import Modal from "../../components/modal";
import Button from "../../components/button";
import InputDatalist from "../../components/input-datalist";

const MutateForm = ({
	isCreatingNew,
	setIsCreatingNew,
	onMutate,
	isLoading,
	payload,
	onSetPayload,
	namesList,
}: {
	isCreatingNew: boolean;
	setIsCreatingNew: (value: boolean) => void;
	onMutate: () => void;
	isLoading: boolean;
	payload: {
		name: string;
		price: number;
		count: number;
		createdAt: string;
	};
	onSetPayload: (field: keyof typeof payload) => (value: string) => void;
	namesList?: string[];
}) => {
	console.log(payload.createdAt);
	return (
		<Modal
			showModal={isCreatingNew}
			setShowModal={setIsCreatingNew}
			title="Введите данные по операции"
			successBtn={
				<Button text="Подтвердить" onClick={onMutate} isLoading={isLoading} />
			}
		>
			<InputDatalist
				title="Название"
				value={payload.name}
				onChange={onSetPayload("name")}
				datalist={namesList}
			/>
			<InputDatalist
				title="Стоимость"
				type="number"
				value={payload.price}
				onChange={onSetPayload("price")}
			/>
			<InputDatalist
				title="Количество"
				type="number"
				value={payload.count}
				onChange={onSetPayload("count")}
			/>
			<InputDatalist
				title="Дата"
				value={payload.createdAt}
				onChange={onSetPayload("createdAt")}
				type="date"
			/>
		</Modal>
	);
};

export default MutateForm;
