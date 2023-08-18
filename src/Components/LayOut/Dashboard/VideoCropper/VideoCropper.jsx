import React from 'react';
import ReactPlayer from 'react-player';
import icon1 from '../../../assets/icons/cloud-arrow-up-solid.svg';
import Modal from 'react-modal';
import modalIcons from '../../../assets/icons/purple_logo.svg'
class VideoCropper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videoSrc: null,
            crop: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            isUploadModalOpen: false,
        };

        this.handleDrop = this.handleDrop.bind(this);
        this.handleCropChange = this.handleCropChange.bind(this);
        this.handleApplyCrop = this.handleApplyCrop.bind(this);
        this.handleOpenUploadModal = this.handleOpenUploadModal.bind(this);
        this.handleCloseUploadModal = this.handleCloseUploadModal.bind(this);

        this.videoRef = React.createRef();
    }

    handleDrop(event) {
        event.preventDefault();

        const file = event.dataTransfer.files[0];

        if (file) {
            const videoSrc = URL.createObjectURL(file);
            this.setState({ videoSrc });
        }
    }

    handleDragOver(event) {
        event.preventDefault();
    }

    handleCropChange(crop) {
        this.setState({ crop });
    }

    handleApplyCrop() {
        // Implement your custom logic here to apply the cropping.
        // You can use the crop values from this.state.crop.
        console.log('Custom crop applied:', this.state.crop);
    }
    handleOpenUploadModal() {
        this.setState({ isUploadModalOpen: true });
    }

    handleCloseUploadModal() {
        this.setState({ isUploadModalOpen: false });
    }


    render() {
        const { x, y, width, height, videoSrc, isUploadModalOpen } = this.state;
        const cropStyle = {
            position: 'absolute',
            border: '2px dashed red',
            left: x + 'px',
            top: y + 'px',
            width: width + 'px',
            height: height + 'px',
        };

        return (
            <div className='flex'>
                <div
                    onDrop={this.handleDrop}
                    onDragOver={this.handleDragOver}
                    style={{
                        width: '200px',
                        height: '200px',
                        border: '2px dashed #ccc',
                        padding: '20px',
                        textAlign: 'center',
                        margin: '0 auto', // Center the drag area
                        marginBottom: '20px',
                    }}
                >
                    <p className='font-bold'>
                        Drag and drop a video file here{' '}
                        <img
                            src={icon1}
                            width={'50px'}
                            style={{ margin: 'auto', cursor: 'pointer' }}
                            alt=""
                            onClick={this.handleOpenUploadModal}
                        />
                    </p>
                    <button onClick={this.handleOpenUploadModal} className='text-blue-600'>  Upload Media</button>
                </div>

                {videoSrc ? (
                    <div>
                        <div style={{ position: 'relative', maxWidth: '100%' }}>
                            <ReactPlayer
                                ref={this.videoRef}
                                url={videoSrc}
                                playing={false}
                                controls={true}
                                width="100%"
                            />
                            <div style={cropStyle}></div>
                        </div>
                        <div>
                            <h2>Crop Controls</h2>
                            <label>
                                X:{' '}
                                <input
                                    type="number"
                                    value={x}
                                    onChange={(e) =>
                                        this.handleCropChange({
                                            ...this.state.crop,
                                            x: parseInt(e.target.value),
                                        })
                                    }
                                />
                            </label>
                            <label>
                                Y:{' '}
                                <input
                                    type="number"
                                    value={y}
                                    onChange={(e) =>
                                        this.handleCropChange({
                                            ...this.state.crop,
                                            y: parseInt(e.target.value),
                                        })
                                    }
                                />
                            </label>
                            <label>
                                Width:{' '}
                                <input
                                    type="number"
                                    value={width}
                                    onChange={(e) =>
                                        this.handleCropChange({
                                            ...this.state.crop,
                                            width: parseInt(e.target.value),
                                        })
                                    }
                                />
                            </label>
                            <label>
                                Height:{' '}
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) =>
                                        this.handleCropChange({
                                            ...this.state.crop,
                                            height: parseInt(e.target.value),
                                        })
                                    }
                                />
                            </label>
                            <button onClick={this.handleApplyCrop}>Apply Crop</button>
                        </div>
                    </div>
                ) : (
                    <div style={{ width: '100%', maxWidth: '900px' }}>
                        <video controls>
                            <source src="" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}

                {/* {isUploadModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Upload Video</h2>
                            <input type="file" accept="video/*" onChange={this.handleUploadVideo} />
                            <button onClick={this.handleCloseUploadModal}>Close</button>
                        </div>
                    </div>
                )} */
                    <Modal
                        isOpen={isUploadModalOpen}
                        onRequestClose={this.handleCloseUploadModal}
                        contentLabel="Upload Video Modal"
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            },
                            content: {
                                border: 'none',
                                borderRadius: '8px',
                                padding: '20px',
                                maxWidth: '400px',
                                maxHeight: "300px",
                                margin: 'auto',
                            },
                        }}
                    >  <button className='ml-72 btn btn-circle btn-outline  btn-secondary ' onClick={this.handleCloseUploadModal}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <h2 className='font-bold flex gap-3' > <img src={modalIcons} width={"40px"} alt="" /> Upload Your <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent'>  Media files</span>  </ h2>
                        <input type="file" accept="video/*"
                            onChange={this.handleUploadVideo} />

                    </Modal>
                }
            </div>
        );
    }
}

export default VideoCropper;