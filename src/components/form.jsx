const PostCreateForm = () => {
    return (
        <>
            <div id="create-post">
                <form>
                    <div className="input-section mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input
                            className="mdl-textfield__input"
                            type="text"
                            id="title"
                        />
                        <label
                            className="mdl-textfield__label"
                            for="title"
                            name="title"
                        >
                            Title
                        </label>
                    </div>
                    <div
                        className="input-section mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                        id="manual-location"
                    >
                        <input
                            className="mdl-textfield__input"
                            type="text"
                            id="location"
                        />
                        <label
                            className="mdl-textfield__label"
                            for="location"
                            name="location"
                        >
                            Location
                        </label>
                    </div>
                    <br />
                    <div>
                        <button
                            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-color--accent"
                            type="submit"
                            id="post-btn"
                        >
                            Post!
                        </button>
                    </div>
                    <br />
                    <div>
                        <button
                            className="mdl-button mdl-js-button mdl-button--fab"
                            id="close-create-post-modal-btn"
                            type="button"
                        >
                            <i className="material-icons">close</i>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
