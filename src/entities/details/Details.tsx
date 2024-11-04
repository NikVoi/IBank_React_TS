import styles from './Details.module.scss'

const Details = () => {
	return (
		<section className={styles.details}>
			{/* <Loader /> */}

			{/* <div className={styles.information}>
					<div className={styles.currentBalance}>
						<p>
							{selectedCard.card.balance} {selectedCard.card.currency}
						</p>
						<p>Баланс</p>
					</div> */}

			{/* <div className={styles.description}>
				<div className={styles.title}>
					<p className={styles.item}>Имя карты</p>
					<p className={styles.item}>Номер карты</p>
					<p className={styles.item}>Дата</p>
					<p className={styles.item}>CVC</p>
				</div>

				<div className={styles.info}>
					<p className={styles.item}>******</p>
					<p className={styles.item}>**** **** **** ****</p>
					<p className={styles.item}>12.3</p>
					<p className={styles.item}>***</p>
				</div>
			</div> */}

			{/* <div className={styles.actions}>
					<Link to={'/dashboard/transfer'}>
						<Button text={'Транзацкции'} svg={<BiTransferAlt />} />
					</Link>

					<Button
						text={isHidden ? 'Показать инф.' : 'Скрыть инф.'}
						svg={isHidden ? <IoMdEye /> : <FaEyeSlash />}
						onClick={handleToggleHidden}
					/>
				</div> */}
		</section>
	)
}

export default Details
